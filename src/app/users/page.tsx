import Link from "next/link";

export default function Users() {
  return (
    <div>
      <h1>Usuários</h1>
      <Link className="text-blue-500" href={'/users/create-user'}> Cadastrar usuário </Link>
    </div>
  );
}