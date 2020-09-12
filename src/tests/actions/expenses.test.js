import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense(
        '123abc', { description: 'a new value' }
    );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc', updates: { description: 'a new value' }
    });
});

test('should set up add expense object with provided values', () => {
    const expenseData = {
        description: 'New Description',
        amount: 42300,
        createdAt: 949499,
        note: 'New Note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should set up add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    });
});