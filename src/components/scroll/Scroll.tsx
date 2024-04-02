import { styled } from '@mui/material/styles';

import List from '@mui/material/List';


interface ScrollProps {
  children: React.ReactNode;
}

const StyledList = styled(List)({
  maxHeight: '80vh',
  width: '100%',
  bgcolor: 'background.paper',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '6px', // Largura da barra de scroll
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888', // Cor do thumb (barra de arrastar)
    borderRadius: '4px', // Borda arredondada
  },
});

const Scroll = (props: ScrollProps) => {
  return (
    <StyledList>
      {props.children}
    </StyledList>
  );
}

export { Scroll }