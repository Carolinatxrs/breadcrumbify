"use client";

import { EditorView } from "./components/editorView";

export default function CreateUser() {
  const conteudo = "<p class=\"text-node\"><span style=\"color: var(--mt-accent-bold-blue)\"><strong><em><u>Enviar justificativa</u></em></strong></span></p>"
  
  return (
    <div className="mb-4 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 pb-7">Criar Usuário</h1>

      <div className="flex justify-center gap-2 flex-col border border-gray-400 mx-4 w-2/6 px-4 py-3">
        <span className="font-bold py-3">Editor</span>
        <EditorView value={conteudo} />
      </div>
    </div>
  );
}