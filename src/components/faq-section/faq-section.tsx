import { Spoiler } from "./faq-spoiler/faq-spoiler";
import { SpoilersLocal } from "../../data/data"
import { useSpoilers } from "../../hooks/spoilers";

import { Loader } from "./loader";
import { Error } from "./erorr";
import { Modal } from "./modal";
import { CreateSpoiler } from "./create-spoiler";
import { ISpoiler } from "../../models";

export function FaqSection() {
  const createHandler = (spoiler: ISpoiler) => {
    setModal(false)
    addSpoiler(spoiler)
  }
  const {loading, spoilers, error, modal, setModal, addSpoiler} = useSpoilers()

  function hideHandler(){
    setModal(!modal);
  }

  modal ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');

  return (
    <section className="faq md:mt-[90px] mt-[50px]">
      <div className="container">
        <div className="grid lg:grid-cols-[.7fr_1fr] gap-[30px] lg:gap-[50px]">
          <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-bold">Frequently asked questions.</h2>
          <div>
            <h2 className="pb-[5px] mb-[20px] font-bold text-[24px] border-b text-accent border-accent">Data From Server</h2>
            {error && <Error />}
            {loading && <Loader />}
            { spoilers.map(spoiler => <Spoiler spoiler={spoiler} key={spoiler.id} />) }
            <h2 className="pb-[5px] mb-[20px] mt-[40px] font-bold text-[24px] border-b text-accent border-accent">Local Data</h2>
            { SpoilersLocal.map(spoiler => <Spoiler spoiler={spoiler} key={spoiler.id} />) }
          </div>
        </div>
        <h2 className="text-[28px] md:text-[32px] text-center md:mt-[90px] mt-[50px] lg:text-[48px] font-bold">So go on, start growing faster.</h2>
        <button className="button" onClick={hideHandler}>Try It Now</button>
        {modal && <Modal click={hideHandler} title="Add A Spoiler">
          <CreateSpoiler onCreate={createHandler} />
        </Modal>}
      </div>
    </section>
  );
}
