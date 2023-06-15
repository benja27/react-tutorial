import styles from "@/styles/Header.module.css";

const Header = () => {  
  return (
    <header className="text-center bg-primary text-white rounded-3">
      <h1 className="py-2" >todos</h1>
      <p className="pb-4">Items will persist in the browser local storage</p>
    </header>
  );
};
export default Header;
