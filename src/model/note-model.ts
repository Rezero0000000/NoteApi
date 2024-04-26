export type Note = {
    id: number,
    title: string,
    category: string,
    message: string,
    category_id: number,
    created_at: string,
    update_at: string
}

export type CreateNoteRequest = {
    title: string,
    category: string,
    message: string,
    category_id: number
}

export type UpdateNoteRequest = {
    title?: string | null,
    category?: string | null,
    message?: string | null
}

export type NoteRespone = {
    id: number,
    title: string,
    category: string,
    message: string,
    category_id: number,
    created_at: string,
    update_at: string
}

export function ToNoteResponse(note: Note): NoteRespone {
    return {
        id: note.id,
        title: note.title,
        category: note.category,
        message: note.message,
        category_id: note.category_id,
        created_at: note.created_at,
        update_at: note.update_at
    }
}


// User



// Maksudku gini

// 1. Post memiliki relationship many to one terhadap kategori
// 2. Sementara kategori memiliki relationship one to many terhadap post

// jadi aku bisa memanggil banyak post di 1 kategori dan bisa menuju 1 kategori di banyak post

// ChatGPT
// Paham, Anda ingin mengatur relasi di mana sebuah posting (post) terkait dengan satu kategori, tetapi satu kategori dapat memiliki banyak posting. Mari kita sesuaikan migrasi dan hubungan di KnexJS sesuai dengan kebutuhan tersebut:

// javascript
// Copy code
// // Migrasi untuk tabel 'categories'
// exports.up = function(knex) {
//   return knex.schema.createTable('categories', function(table) {
//     table.increments('id').primary();
//     table.string('name');
//     // Tambahkan kolom lainnya jika diperlukan
//   });
// };

// exports.down = function(knex) {
//   return knex.schema.dropTable('categories');
// };

// // Migrasi untuk tabel 'posts'
// exports.up = function(knex) {
//   return knex.schema.createTable('posts', function(table) {
//     table.increments('id').primary();
//     table.string('title');
//     table.text('content');
//     table.integer('category_id').unsigned();
//     table.foreign('category_id').references('categories.id');
//     // Tambahkan kolom lainnya jika diperlukan
//   });
// };

// exports.down = function(knex) {
//   return knex.schema.dropTable('posts');
// };
// Dengan migrasi ini, kita menetapkan relasi sebagai berikut:

// Setiap posting (post) memiliki kolom "category_id" yang merupakan foreign key yang merujuk ke kolom "id" di tabel "categories". Ini menunjukkan bahwa setiap posting terkait dengan satu kategori.
// Tabel "categories" tidak memiliki kolom yang secara langsung menghubungkannya ke tabel "posts". Sebaliknya, hubungan antara "categories" dan "posts" ditentukan oleh kolom "category_id" di tabel "posts".
// Dengan pengaturan ini, Anda dapat mengakses banyak posting yang terkait dengan suatu kategori dengan melakukan query pada tabel "posts" dengan memfilter berdasarkan "category_id", dan Anda juga dapat mengakses kategori yang terkait dengan suatu posting dengan mengacu pada kolom "category_id" dalam tabel "posts".





