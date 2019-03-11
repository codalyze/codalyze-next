FROM node:10

# RUN apt-get update && \
#     apt-get install -y build-essential python git wget net-tools vim

WORKDIR /usr/src/app

ADD package*.json ./

# Install packages
RUN npm ci

COPY . .

RUN ls

RUN npm run build

# RUN apt-get remove -y --purge build-essential python git wget && \
#     apt-get autoremove -y && \
#     apt-get clean

# Copy source files

EXPOSE 3000

CMD ["npm", "start"]
