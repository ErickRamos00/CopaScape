@echo off
cd /d "%~dp0"
echo.
echo === CopaScape: envio para GitHub ===
echo.
git status -sb
echo.
echo Enviando para origin/main...
git push -u origin main
echo.
if errorlevel 1 (
  echo O envio falhou. Copie a mensagem acima e envie para o Codex.
) else (
  echo Envio concluido com sucesso.
)
echo.
pause
