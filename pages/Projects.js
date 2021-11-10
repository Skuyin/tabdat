import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import { SliderData } from '../SliderData';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projetcs__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projetcs__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--deep-dark);
    border-radius: 6px;
    outline: none;
    border: none;
    border: 2px solid coral;
  }
  .projetcs__searchBar .searchIcon {
    position: absolute;
    width: initial;
    right: 1rem;
  }
  .projetcs__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projetcs__searchBar,
    .projetcs__searchBar form,
    .projetcs__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(SliderData);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      SliderData.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(SliderData);
    }
  }

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my recent works" />
        <div className="projetcs__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
