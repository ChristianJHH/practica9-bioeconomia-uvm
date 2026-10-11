@echo off
title Momento 1 - Collage Bioeconomia (Estilo Genially)
echo ==========================================================
echo  Iniciando Presentacion Interactiva - Momento 1 Genially
echo ==========================================================
echo Abriendo en el navegador...
start http://localhost:8085
echo Servidor activo en http://localhost:8085
echo (Presiona Ctrl+C para detener)
python -m http.server 8085
pause
