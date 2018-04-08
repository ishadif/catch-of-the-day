import React from 'react';


class AddFishForm extends React.Component {
    nameRef = React.createRef();
    statusRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = event => {
        event.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            status: this.statusRef.current.value,
            price: this.priceRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }

        // this is how we pass our data up into parent component through props, in this case App component
        this.props.addFish(fish);

        // reset our form using javascript reset method that lives on currentTarget property
        console.log(event.currentTarget.reset());
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder="enter fish name" />  
                <input type="text" name="price" ref={this.priceRef} placeholder="enter fish price" />  
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="description" ref={this.descRef} placeholder="description.."></textarea>
                <input type="text" ref={this.imageRef} name="image" placeholder="enter fish image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;