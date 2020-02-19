import React, { Component } from 'react';

const TransferForm = ({form, onChange, onSubmit}) => (
    <form className="form-inline justify-content-center" onSubmit={onSubmit}>
        <div className="form-group mb-2">
            <input type="text" className="form-control" placeholder="Description" name="description" value={form.description} onChange={onChange}></input>
        </div>
        <div className="input-group mx-sm-2 mb-2">
            <div className="input-group-prepend">
                <div className="input-group-text">$</div>
            </div>
            <input type="text" className="form-control" name="amount" value={form.amount} onChange={onChange}></input>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Add</button>
    </form>
)

export default TransferForm