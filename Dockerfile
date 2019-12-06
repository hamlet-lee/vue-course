FROM node:alpine as builder

# ENV PROJECT_ENV production
# ENV NODE_ENV production

# http-server 不变动也可以利用缓存
WORKDIR /code
COPY package*.json ./
# RUN npm install --production
RUN npm install

COPY . .
RUN npm run build

# 选择更小体积的基础镜像
FROM nginx:alpine
COPY --from=builder /code/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/dist /usr/share/nginx/html/ui
