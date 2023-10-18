import { LoginWapper } from "./LoginStyle";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <LoginWapper>
      <h1 className="title">程序员美食指南系统</h1>
      <LoginForm />
    </LoginWapper>
  );
}
