import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";

const ProjectItemStyles = styled.div`
    .projectItem__img {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: coral;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    color: var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

const ProjectItem = ({
    img = "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title = "dummy test",
    desc = "desc desc dsc",
}) => {
    return (
        <ProjectItemStyles>
            <div className="projectItem__img">
                <Image layout="responsive" width="100%" height="100%" objectFit="cover" src={img} alt="projetc img" />
            </div>
            <div className="projectItem__info">
                <Link passHref href="/">
                    <h3 className="projectItem__title">{title}</h3>
                </Link>
                <p className="projectItem__desc">{desc}</p>
            </div>
        </ProjectItemStyles>
    )
}

export default ProjectItem
