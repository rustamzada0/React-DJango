# Node.js tabanlı bir image kullanarak başla
FROM node:14-alpine

# Uygulama dosyalarını çalışma dizinine kopyala
WORKDIR /app
COPY . .

# Gerekli paketleri yükle ve uygulamayı başlat
RUN npm install
RUN npm run build

# Uygulamayı çalıştırmak için bir komut tanımla
CMD ["npm", "start"]
