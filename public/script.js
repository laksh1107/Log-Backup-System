async function checkHealth() {
  const res = await fetch("/health");
  const data = await res.json();

  document.getElementById("health").innerText =
    `Status: ${data.status} | Time: ${data.time}`;
}

async function loadLogs() {
  const res = await fetch("/logs");
  const logs = await res.json();

  const list = document.getElementById("logs");
  list.innerHTML = "";

  if (logs.length === 0) {
    list.innerHTML = "<li>No logs found</li>";
    return;
  }

  logs.forEach(log => {
    const li = document.createElement("li");
    li.innerText = log;
    list.appendChild(li);
  });
}

async function runBackup() {
  const output = document.getElementById("backup");
  output.innerText = "Running backup...\n";

  try {
    const res = await fetch("/backup", { method: "POST" });
    const data = await res.json();

    output.innerText += data.message + "\n";
    output.innerText += data.output || "";
  } catch (err) {
    output.innerText += "Error running backup";
  }
}