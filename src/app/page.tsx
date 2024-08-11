import handleForm from "./action";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-screen gap-6">
      <div>
        <h1 className="uppercase text-2xl font-bold">Envía tu correo</h1>
      </div>
      <section className="flex items-center justify-center">
        <form className="flex flex-col gap-y-4 w-96" action={handleForm}>
          <input
            className="bg-slate-500 block p-2 placeholder:text-slate-800"
            name="title"
            type="text"
            placeholder="Email Title"
          />
          <input
            className="bg-slate-500 block p-2 placeholder:text-slate-800"
            name="from_name"
            type="text"
            placeholder="Escribre el nombre de la persona"
          />
          <input
            className="bg-slate-500 block p-2 placeholder:text-slate-800"
            name="from_email"
            type="email"
            placeholder="Escribe el email de la persona"
          />
          <textarea
            className="bg-slate-500 block p-2 placeholder:text-slate-800 h-52"
            name="content"
            placeholder="Deja tu mensaje..."
          ></textarea>
          <button className="bg-zinc-900 block p-2 placeholder:text-slate-300">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
