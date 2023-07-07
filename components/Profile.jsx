import Link from "next/link";
import PromptCard from "./PromptCard";


const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='green_gradient'>{name} Perfil</span>
      </h1>
      <p className='desc text-left'>{desc}</p>


      {/* MENSAJES */}
      <div className="pt-10 flex gap-6">
        <Link
          href='/create-prompt'
          className='black_btn'
        >
          Enviar nuevo mensaje
        </Link>
        <Link
          href='/feed'
          className='black_btn'
        >
          Ver todas las sugerencias
        </Link>
      </div>
      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>

    </section>
  );
};

export default Profile;