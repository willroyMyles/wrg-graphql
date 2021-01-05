# pull base
# FROM node:alpine3.10
FROM mhart/alpine-node

#set working dir
RUN mkdir /app
WORKDIR /app

RUN ls /app

#ENV PATH /app/node_modules/.bin:${path}

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 


#add app
COPY . ./

#start app
CMD ["npm", "start"]
