import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const AppServiceProvider = (props: Props) => {
    return props.children;
};
export default AppServiceProvider;
