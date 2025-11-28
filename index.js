function calcular() {
  let agua = Number(document.getElementById("agua").value);
  let exe = Number(document.getElementById("exe").value);

  if (isNaN(agua) || isNaN(exe) || exe == 0 || agua == 0) {
    document.getElementById("resultado").style.backgroundColor = "white";
    document.getElementById("resultado").innerText = "Preencha todos os campos";
    return;
  }

  let pts = 0;

  if (agua >= 8) pts += 50;
  else pts += (agua / 8) * 50;

  if (exe >= 30) pts += 50;
  else pts += (exe / 30) * 50;

  let nivel = "";

  if (pts >= 80) nivel = "Perfeito! Continue assim 😄";
  else if (pts >= 50) nivel = "Está bom, mas dá pra melhorar 🙂";
  else nivel = "⚠ Se cuida, amigo!";

  document.getElementById(
    "resultado"
  ).innerText = `Sua pontuação de saúde é ${pts.toFixed(1)} pontos. ${nivel}`;

  document.getElementById("resultado").style.backgroundColor = "white";
}
