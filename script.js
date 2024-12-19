document.getElementById("tirage").addEventListener("click", function () {
  const input = document.getElementById("participants").value;
  const participants = input.split("\n").filter(nom => nom.trim() !== "");
  
  if (participants.length === 0) {
    document.getElementById("resultat").textContent = "Veuillez entrer au moins un participant.";
    return;
  }
  
  const gagnant = participants[Math.floor(Math.random() * participants.length)];
  document.getElementById("resultat").textContent = `Le gagnant est : ${gagnant}`;
});
