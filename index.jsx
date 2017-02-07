import React, { PropTypes } from 'react';
import componentsMap from 'yalo-components';

function mapComponents(components) {
  return components.map((component, key) => {
    return component.name
      && componentsMap.hasOwnProperty(component.name)
      && componentsMap[component.name](component.data, key);
  });
}

function Page({ components }) {
  return <div>{mapComponents(components)}</div>;
}

Page.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  })).isRequired,
};

export default Page;
