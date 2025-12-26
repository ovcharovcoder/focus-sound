import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const command = vscode.commands.registerCommand('focusSound.open', () =>
    openPlayer(context)
  );

  context.subscriptions.push(command);
}

function openPlayer(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'focusSound',
    'Focus Sound',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );

  panel.webview.html = getHtml(panel.webview, context.extensionUri);
}

function getHtml(webview: vscode.Webview, extensionUri: vscode.Uri): string {
  const baseUri = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'media')
  );

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy"
    content="
      default-src 'none';
      img-src ${webview.cspSource};
      media-src ${webview.cspSource};
      script-src ${webview.cspSource};
      style-src ${webview.cspSource};
    ">
  <base href="${baseUri}/">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Focus Sound</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="player">
    <select id="track">
     <option value="Relax_1.mp3">Relax 1</option>
     <option value="Relax_2.mp3">Relax 2</option>
     <option value="Relax_3.mp3">Relax 3</option>
     <option value="Relax_4.mp3">Relax 4</option>
     <option value="Relax_5.mp3">Relax 5</option>
     <option value="Relax_6.mp3">Relax 6</option>
     <option value="Relax_7.mp3">Relax 7</option>
     <option value="Relax_8.mp3">Relax 8</option>
     <option value="Relax_9.mp3">Relax 9</option>
     <option value="Relax_10.mp3">Relax 10</option>
     <option value="Relax_11.mp3">Relax 11</option>
     <option value="Relax_12.mp3">Relax 12</option>
     <option value="Relax_13.mp3">Relax 13</option>
     <option value="Relax_14.mp3">Relax 14</option>
     <option value="Relax_15.mp3">Relax 15</option>
     <option value="Relax_16.mp3">Relax 16</option>
     <option value="Relax_17.mp3">Relax 17</option>
     <option value="Relax_18.mp3">Relax 18</option>
    </select>

    <button id="play">Play</button>
    <button id="pause">Pause</button>

    <input id="volume" type="range" min="0" max="1" step="0.05" value="0.4">
  </div>

  <audio id="audio" loop></audio>

  <script src="player.js"></script>
</body>
</html>
`;
}

export function deactivate() {}
