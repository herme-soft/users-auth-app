import React from 'react'

export default function Member(props) {
    return (
        <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <h6 class="card-title">{props.position}</h6>
                <h6 class="card-title">{props.tel}</h6>
            </div>
        </div>        
    )
}
