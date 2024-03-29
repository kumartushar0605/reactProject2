import { VStack ,Image, Heading,Text} from '@chakra-ui/react'
import React from 'react'

const ExchangeCart = ({name,symbol,img,rank ,url}) => {
  return (
    <a href={url} >
<VStack w={52} m={8} shadow={'dark-lg'} p={8} borderRadius={50} transition={'all 0.3s'}  
css={{
    '&:hover':{
        transform:"scale(1.1)"
    }
}}>
    <Image src={img} w={10} h={10} objectFit={'contain'}></Image>
    <Heading size={'md'} noOfLines={1}>{rank}</Heading>
    <Text noOfLines={1} >{name}</Text>

</VStack>

    </a>
  )
}

export default ExchangeCart