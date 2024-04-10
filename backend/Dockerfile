# # Python tabanlı bir image kullanarak başla
# FROM python:3.11.6

# # Uygulama dosyalarını çalışma dizinine kopyala
# WORKDIR /app
# COPY . .

# # Gerekli paketleri yükle ve Django uygulamasını başlat
# RUN pip install -r requirements.txt

# # Django uygulaması için gerekli komutlar
# RUN python manage.py migrate
# RUN python manage.py collectstatic --noinput

# # Uygulamayı çalıştırmak için bir komut tanımla
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

FROM python:3.11.6

WORKDIR /code

COPY . .

RUN apt update -y

# no cache

RUN pip install --no-cache-dir -r requirements.txt

# RUN python manage.py migrate
# RUN python manage.py collectstatic --noinput

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]