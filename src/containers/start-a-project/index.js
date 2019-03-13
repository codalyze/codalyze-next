import StartAProject from '../start-a-project/start-a-project';
import PageWrapper from "../../utils/PageWrapper";

const StartAProjectComponent = props => <StartAProject {...props} ></StartAProject>

export default PageWrapper(StartAProjectComponent);
