import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tempore
            doloribus voluptate, harum deleniti in soluta quisquam, sed quod,
            impedit neque id aliquid alias dolorem! Esse debitis tempora tenetur
            sunt doloribus fugiat libero sequi omnis! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Ea, adipisci.
          </p>
          <p>All Right Reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p>(777)654-2912</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
