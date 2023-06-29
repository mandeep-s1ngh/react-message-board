import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalVisibility = () => {
    setIsModalVisible(true);
  };

  const hideModalVisiblity = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalVisibility} />
      <main>
        <PostsList
          isPosting={isModalVisible}
          onStopPosting={hideModalVisiblity}
        />
      </main>
    </>
  );
}

export default App;
