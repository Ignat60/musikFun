import { Header } from "@/common/components/header/Header";
import { Routing } from "@/common/routing";
import s from "./App.module.css";

export const App = () => {
  return (
    <>
      <Header />
      <div className={s.layout}>
        <Routing />
      </div>
    </>
  );
};
