import Image from "next/image";
import plasticWaste from "@/assets/images/plasttic waste.jpg";

function ProblemSpace(): JSX.Element {
  return (
    <section className="mt-10 py-20 flex gap-3 1200px:grid grid-cols-2">
      <div className="  w-full flex justify-center items-center">
        <Image src={plasticWaste} height={3} width={600} alt=" Image" />
      </div>
      <div className="w-full flex flex-col justify-start items-center px-4">
        <h2 className=" font-bold text-3xl text-justify poppins-bold">
          What problems do we hope to solve?
        </h2>
        <p className=" text-justify poppins-regular mt-5">
          We seek to solve the problem of plastic pollution on the beach and in
          the sea as well as coastal erosion. The aim of our project is to
          create a bio-brick from the processes of plastic degradation and
          biocementation. To achieve this we hope to engineer a series of the
          bacterium Vibrio natriegens, to degrade plastic (PET) and to induce
          biocementation through the hydrolysis of urea respectively.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          placeat rerum et? Fugiat ipsa adipisci, ullam inventore aut blanditiis
          laborum? Quam recusandae voluptatibus provident ipsa at facere placeat
          deleniti officiis?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          placeat rerum et? Fugiat ipsa adipisci, ullam inventore aut blanditiis
          laborum? Quam recusandae voluptatibus provident ipsa at facere placeat
          deleniti officiis?
          <br />
         
        </p>
      </div>
    </section>
  );
}

export default ProblemSpace;
