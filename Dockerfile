FROM node:latest

# Install dependencies
RUN apt-get update 
RUN apt-get install -y libasound2 
RUN apt-get install -y libatk1.0-0 
RUN apt-get install -y libc6 
RUN apt-get install -y libcairo2 
RUN apt-get install -y libcups2 
RUN apt-get install -y libdbus-1-3 
RUN apt-get install -y libexpat1 
RUN apt-get install -y libfontconfig1 
RUN apt-get install -y libgcc1 
RUN apt-get install -y libgconf-2-4 
RUN apt-get install -y libgdk-pixbuf2.0-0 
RUN apt-get install -y libglib2.0-0 
RUN apt-get install -y libgtk-3-0 
RUN apt-get install -y libnspr4 
RUN apt-get install -y libpango-1.0-0 
RUN apt-get install -y libpangocairo-1.0-0 
RUN apt-get install -y libstdc++6 
RUN apt-get install -y libx11-6 
RUN apt-get install -y libx11-xcb1 
RUN apt-get install -y libxcb1 
RUN apt-get install -y libxcomposite1 
RUN apt-get install -y libxcursor1 
RUN apt-get install -y libxdamage1 
RUN apt-get install -y libxext6 
RUN apt-get install -y libxfixes3 
RUN apt-get install -y libxi6 
RUN apt-get install -y libxrandr2 
RUN apt-get install -y libxrender1 
RUN apt-get install -y libxss1 
RUN apt-get install -y libxtst6 
RUN apt-get install -y ca-certificates 
RUN apt-get install -y fonts-liberation 
RUN apt-get install -y libappindicator1 
RUN apt-get install -y libnss3 
RUN apt-get install -y lsb-release 
RUN apt-get install -y xdg-utils 
RUN apt-get install -y wget 
RUN apt-get install -y xvfb
RUN apt-get install -y x11vnc
RUN apt-get install -y x11-xkb-utils
RUN apt-get install -y xfonts-100dpi
RUN apt-get install -y xfonts-75dpi
RUN apt-get install -y xfonts-scalable
# RUN apt-get install -y xfonts-cyrillic
RUN apt-get install -y x11-apps
RUN apt-get install -y wget

# Cd into /app
WORKDIR /app

# Copy package.json into app folder
COPY package.json /app

# Install dependencies

RUN wget https://packages.microsoft.com/repos/edge/pool/main/m/microsoft-edge-stable/microsoft-edge-stable_104.0.1293.54-1_amd64.deb
RUN apt-get install -y ./microsoft-edge-stable_104.0.1293.54-1_amd64.deb

RUN chmod -R o+rwx /usr/share/man/man1/microsoft-edge-stable.1.gz
RUN chmod -R o+rwx /usr/bin/microsoft-edge-stable
# RUN PUPPETEER_PRODUCT=chrome npm install
RUN npm install
COPY . /app
# RUN apt-get install -y ./app/chrome32_48_0_2564_109.deb
# RUN chmod -R o+rwx /app/firefox/firefox

# Start server on port 3000∂
EXPOSE 3000:3001
ENV PORT=3001

# Creating Display
ENV DISPLAY :99

# Start script on Xvfb
CMD Xvfb :99 -screen 0 1024x768x16 & npm start