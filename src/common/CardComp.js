import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function CardComp(props) {

  return (
    <Card sx={{ background: props.theame==='Light'?'#F7F9FB':'#262424',color: props.theame==='Light'?'text.secondary':'white', fontSize: 14,borderRadius:'2%' }}>
        <CardContent>
    <div>{props.children}</div>
    </CardContent>
    </Card>
  )
}

export default CardComp