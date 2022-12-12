import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCategories, deleteCategory } from '../actions/quizActions'

function CategoryListScreen({ history }) {

    const dispatch = useDispatch()

    const categoryList = useSelector(state => state.categoryList)
    const { loading, error, categories } = categoryList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const categoryDelete = useSelector(state => state.categoryDelete)
    const { success: successDelete } = categoryDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listCategories())
        } else {
            history.push('/login')
        }

    }, [dispatch, history,successDelete, userInfo])

    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this category?')) {
            dispatch(deleteCategory(id))
        }
    }

    return (
        <div>
            <h1>Categories</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>QUESTION_COUNT</th>
                                    <th>DELETE</th>
                                    <th>Add Question</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categories.map(category => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.title}</td>
                                        <td>{category.question_count}</td>
                                        <td>

                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(category.id)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                        <td>
                                            <LinkContainer to={`/category/list/${category.id}/edit`}>
                                                <Button variant='dark' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
        </div>

    )
}

export default CategoryListScreen
