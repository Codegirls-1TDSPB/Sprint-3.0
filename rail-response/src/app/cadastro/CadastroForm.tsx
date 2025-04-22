export default function CadastroForm() {
    return (
      <div className="min-h-screen bg-[#1b4263] relative flex flex-col items-center justify-center px-4">
        {/* Logo no canto superior esquerdo */}
        <img
          src="/imagens/logo.png"
          alt="Logo"
          className="absolute top-6 left-6 w-24 h-24 rounded-full"
        />
  
        {/* Título acima do formulário */}
        <h1 className="text-3xl font-bold text-white mb-6">Cadastro</h1>
  
        {/* Formulário centralizado */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="sobrenome" className="block text-sm font-medium">
                Sobrenome
              </label>
              <input
                type="text"
                id="sobrenome"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium">
                Telefone
              </label>
              <input
                type="text"
                id="telefone"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  