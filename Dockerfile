# Use a imagem base do Railway para Nixpacks
FROM ghcr.io/railwayapp/nixpacks:ubuntu-1702339400@sha256:1a9c1eed040aacf8f898be048210ef2d3366b1228373c4e6818362bb75611b32

# Defina o diretório de trabalho
WORKDIR /app/

# Instale o Node.js e o Yarn
RUN apt-get update && \
    apt-get install -y nodejs npm yarn

# Copie o conteúdo do projeto para o diretório de trabalho
COPY . /app/.

# Execute o comando de build
RUN yarn run build
