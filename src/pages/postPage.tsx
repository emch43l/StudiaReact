import { Link } from 'react-router-dom';
import MainCard from "../components/mainCard";
import MainCardHeader from '../components/mainCardHeader';

export default function PostPage() {
  return (
    <MainCard>
      <MainCardHeader isSubPage={true} text={"Posts"}/>
      <div>

      </div>
    </MainCard>
  );
}
