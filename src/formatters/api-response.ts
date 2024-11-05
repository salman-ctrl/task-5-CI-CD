export const successResponse = (data: any, message = 'Berhasil') => ({
    status: 'success',
    message,
    data,
});

export const errorResponse = (error: any, message = 'Terjadi kesalahan') => ({
    status: 'error',
    message,
    error,
});
