var room_id;
var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var local_stream;
var screenStream;
var peer = null;
var currentPeer = null
var screenSharing = false

var options = {
    host: "localhost",
    port: 9000,
    path: "/myapp",
    secure: false,
};
// var options = {};
function createRoom() {
    console.log("-----------Creating Room--------")
    let room = document.getElementById("room-input").value;
    if (room == " " || room == "") {
        alert("Please enter room number")
        return;
    }
    room_id = "r3l86l";
    peer = new Peer(room_id, options);
    peer.on('open', (id) => {
        console.log("Peer Room ID: ", id)
          console.log("-----------startScreenShare--------")
    if (screenSharing) {
        stopScreenSharing()
    }
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((stream) => {
        setScreenSharingStream(stream);

        local_stream = stream;
        screenStream = stream;
        let videoTrack = screenStream.getVideoTracks()[0];
        videoTrack.onended = () => {
            stopScreenSharing()
        }
        if (peer) {
            let sender = currentPeer.peerConnection.getSenders().find(function (s) {
                return s.track.kind == videoTrack.kind;
            })
            sender.replaceTrack(videoTrack)
            screenSharing = true
        }
        console.log(screenStream)
    })
            // startScreenShare()
        // getUserMedia({ video: true, audio: true }, (stream) => {
        //     console.log(stream);
        //     local_stream = stream;
        //     setLocalStream(local_stream)
        // }, (err) => {
        //     console.log(err)
        // })
        notify("Waiting for peer to join.")
    })
    peer.on('call', (call) => {
        call.answer(local_stream);
        call.on('stream', (stream) => {
            console.log("got call");
            console.log(stream);
            setRemoteStream(stream)
        })
        currentPeer = call;
    })
}

function setLocalStream(stream) {
    console.log("-----------setLocalStream--------")
    document.getElementById("local-vid-container").hidden = false;
    let video = document.getElementById("local-video");
    video.srcObject = stream;
    video.muted = true;
    video.play();
}
function setScreenSharingStream(stream) {
    
    console.log("-----------setScreenSharingStream--------")
    document.getElementById("screenshare-container").hidden = false;
    let video = document.getElementById("screenshared-video");
    video.srcObject = stream;
    video.muted = true;
    video.play();
}
function setRemoteStream(stream) {
    console.log("-----------setRemoteStream--------")
    document.getElementById("remote-vid-container").hidden = false;
    let video = document.getElementById("remote-video");
    video.srcObject = stream;
    video.play();
}


function notify(msg) {
    console.log("-----------notify--------")
    let notification = document.getElementById("notification")
    notification.innerHTML = msg
    notification.hidden = false
    setTimeout(() => {
        notification.hidden = true;
    }, 3000)
}

function joinRoom() {
    console.log("-----------Join Room--------")
    let room = document.getElementById("room-input").value;
    if (room == " " || room == "") {
        alert("Please enter room number")
        return;
    }
    room_id = room;
    peer = new Peer(options)
    peer.on('open', (id) => {
        console.log("Connected room with Id: " + id)

        getUserMedia({ video: true, audio: false }, (stream) => {
            local_stream = stream;
            setLocalStream(local_stream)
            notify("Joining peer")
            let call = peer.call(room_id, stream)
            call.on('stream', (stream) => {
                console.log("-----------Join Room setRemoteStream--------")
                setRemoteStream(stream);

            })
            currentPeer = call;
        }, (err) => {
            console.log(err)
        })

    })
}
function joinRoomWithoutCamShareScreen() {
    // join a call and drirectly share screen, without accesing camera
    // console.log("Joining Room")
    
    console.log("-----------joinRoomWithoutCamShareScreen--------")
    let room = document.getElementById("room-input").value;
    if (room == " " || room == "") {
        alert("Please enter room number")
        return;
    }
    room_id = room;
    peer = new Peer(options)
    peer.on('open', (id) => {
        console.log("Connected with Id: " + id)

        const createMediaStreamFake = () => {
            return new MediaStream([createEmptyAudioTrack(), createEmptyVideoTrack({ width: 640, height: 480 })]);
        }

        const createEmptyAudioTrack = () => {
            const ctx = new AudioContext();
            const oscillator = ctx.createOscillator();
            const dst = oscillator.connect(ctx.createMediaStreamDestination());
            oscillator.start();
            const track = dst.stream.getAudioTracks()[0];
            return Object.assign(track, { enabled: false });
        }

        const createEmptyVideoTrack = ({ width, height }) => {
            const canvas = Object.assign(document.createElement('canvas'), { width, height });
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, width, height);

            const stream = canvas.captureStream();
            const track = stream.getVideoTracks()[0];

            return Object.assign(track, { enabled: false });
        };

        notify("Joining peer")
        let call = peer.call(room_id, createMediaStreamFake())
        call.on('stream', (stream) => {
            console.log("-----------joinRoomWithoutCamShareScreen setRemoteStream--------")
            setRemoteStream(stream);

        })

        currentPeer = call;
        startScreenShare();

    })
}

function joinRoomShareVideoAsStream() {
    
    console.log("-----------joinRoomShareVideoAsStream--------")
    // Play video from local media
    // console.log("Joining Room")
    let room = document.getElementById("room-input").value;
    if (room == " " || room == "") {
        alert("Please enter room number")
        return;
    }

    room_id = room;
    peer = new Peer(options)
    peer.on('open', (id) => {
        console.log("Connected with Id: " + id)

        document.getElementById("local-mdeia-container").hidden = false;
        
        const video = document.getElementById('local-media');
        video.onplay = function () {
            const stream = video.captureStream();
            notify("Joining peer")
            let call = peer.call(room_id, stream)

            // Show remote stream on my side
            call.on('stream', (stream) => {
                console.log("-----------joinRoomShareVideoAsStream setRemoteStream--------")
                setRemoteStream(stream);

            })
        };
        video.play();
    })
}

function startScreenShare() {
    
    console.log("-----------startScreenShare--------")
    if (screenSharing) {
        stopScreenSharing()
    }
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((stream) => {
        setScreenSharingStream(stream);

        screenStream = stream;
        let videoTrack = screenStream.getVideoTracks()[0];
        videoTrack.onended = () => {
            stopScreenSharing()
        }
        if (peer) {
            let sender = currentPeer.peerConnection.getSenders().find(function (s) {
                return s.track.kind == videoTrack.kind;
            })
            sender.replaceTrack(videoTrack)
            screenSharing = true
        }
        console.log(screenStream)
    })
}

function stopScreenSharing() {
    console.log("-----------stopScreenShare--------")
    if (!screenSharing) return;
    let videoTrack = local_stream.getVideoTracks()[0];
    if (peer) {
        let sender = currentPeer.peerConnection.getSenders().find(function (s) {
            return s.track.kind == videoTrack.kind;
        })
        sender.replaceTrack(videoTrack)
    }
    screenStream.getTracks().forEach(function (track) {
        track.stop();
    });
    screenSharing = false
}