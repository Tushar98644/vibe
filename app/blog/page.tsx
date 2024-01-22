import { CommonHero } from "@/components";
import SearchBar from "@/components/SearchBar/searchBar";
import { Fragment } from "react";

const Blog = () => {
  return (
    <Fragment>
      <CommonHero
        title={"Blog"}
        subtitle={
          "Talk a look at my blogs where i shared all experiences of my journey so far"
        }
        position={"start"}
      >
        <SearchBar />
      </CommonHero>
    </Fragment>
  );
};

export default Blog;
