import React from 'react'
import { useRouter } from 'next/router'

const userId = () => {
    const router=useRouter();
    console.log(router.query.slug);
  return (
    <div>
        awessome {router.query.slug}
      
    </div>
  )
}

export default userId
