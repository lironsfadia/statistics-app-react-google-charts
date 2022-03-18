import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: '0px 0px 13px 0px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function InputBox({data}) {
  return (
    <Stack direction="row" spacing={1}>
      <Item>Total Number of Users Around the World: {Number(data).toLocaleString()}</Item>
    </Stack>
  );
}

InputBox.propTypes = {
  data: PropTypes.string.isRequired,
};