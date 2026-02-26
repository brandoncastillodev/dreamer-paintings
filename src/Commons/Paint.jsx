import ModalImage from "react-modal-image";

function Paint({ painting, tiny }) {
  return (
    <div className="painting">
      <a href={`https://dreamer-paintings.vercel.app/${painting}`} target="_blank" rel="noopener noreferrer">
       <img
          src={tiny}
          alt="Dreamer Paintings"
          loading="lazy"
        />
      </a>
    </div>
  );
}

export default Paint;
