#!/bin/bash
# Este script detiene el proyecto rede1 en Hostinger
# Puedes programarlo con cron o at en el servidor VPS

echo "Deteniendo el proyecto rede1..."
cd /docker/rede1 && docker compose down
echo "Proyecto detenido."
