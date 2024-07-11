const descriptions = [
  {
    id: 1,
    name: 'coffee',  
  },
  {
    id: 2,
    name: 'tea',
  },
  {
    id: 3,
    name: 'desserts',
  }
];

function getDesName(id) {
  const description = descriptions.find(item => item.id === id);
  return description ? description.name : '';
}

export default { descriptions, getDesName }