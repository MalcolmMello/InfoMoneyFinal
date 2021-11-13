import { BrowserRouter, Route } from "react-router-dom";
import { Item } from './types/Item'
//Rotas da área de cadastro
import { InitialPage } from "./pages/InitialPage";
import { SignUp } from "./pages/SignUp";
import { Policy } from './pages/Policy'
import { Terms } from "./pages/Terms";
import { Email } from "./pages/Email";
import { Password } from "./pages/Password";

//Rotas da página
import { BeginPage } from "./WebPages/BeginPage";
import { newsPage } from "./WebPages/newsPage";
import { FinancePage } from "./WebPages/financePage";
import { marketPage } from "./WebPages/marketPage";
import { UserPerfil } from "./WebPages/UserPerfil";
import { ChangeData } from "./WebPages/ChangeData";
import { ChangePassword } from "./WebPages/ChangePassword"
import { ReferFriend } from "./WebPages/ReferFriend";
import { AddAccount } from "./WebPages/AddAccount";
import { BancoInter } from "./WebPages/BancoInter";
import { FinanceControl } from "./WebPages/FinanceControl";


export const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={InitialPage}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Policy" component={Policy} />
            <Route path="/policyandterms" component={Terms}/>
            <Route path="/email" component={Email}/>
            <Route path="/password" component={Password}/>
            <Route path="/beginPage" component={BeginPage} />
            <Route path="/newsPage" component={newsPage} />
            <Route path="/financePage" component={FinancePage} />
            <Route path="/marketPage" component={marketPage} />
            <Route path="/userPerfil" component={UserPerfil} />
            <Route path="/changeData" component={ChangeData} />
            <Route path="/changePassword" component={ChangePassword} />
            <Route path="/referFriend" component={ReferFriend} />
            <Route path="/AddAccount" component={AddAccount} />
            <Route path="/BancoInter" component={BancoInter} />
            <Route path="/financeControl" component={FinanceControl} />
        </BrowserRouter>
    )
}