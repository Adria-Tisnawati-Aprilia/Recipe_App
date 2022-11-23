import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'katsu-curry',
        title: 'Katsu Curry',
        description: 'Kari lezat yang dibuat dengan ayam, kentang, dan saus spesial',
        ingredients: [
          '1 sendok makan minyak zaitun',
          '1 bawang bombay, cincang',
          '2 siung bawang putih, cincang',
          '1 sendok makan bubuk kari',
        ],
        method: [
          'Panaskan minyak dalam wajan besar di atas api sedang.',
          'Tambahkan bawang merah dan bawang putih dan masak, aduk terus, sampai lunak, sekitar 5 menit.',
          'Tambahkan bubuk kari dan masak, aduk, sampai harum, sekitar 1 menit.',
          'Tambahkan ayam dan kentang dan masak, aduk, sampai panas, sekitar 5 menit.',
        ]
      },
      {
        slug: 'ramen-noodle-soup',
        title: 'Ramen noodle soup',
        description: 'Kari lezat yang dibuat dengan ayam, kentang, dan saus spesial',
        ingredients: [
          '1 sendok makan minyak zaitun',
          '1 bawang bombay, cincang',
          '2 siung bawang putih, cincang',
          '1 sendok makan bubuk kari',
        ],
        method: [
          'Panaskan minyak dalam wajan besar di atas api sedang.',
          'Tambahkan bawang merah dan bawang putih dan masak, aduk terus, sampai lunak, sekitar 5 menit.',
          'Tambahkan bubuk kari dan masak, aduk, sampai harum, sekitar 1 menit.',
          'Tambahkan ayam dan kentang dan masak, aduk, sampai panas, sekitar 5 menit.',
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})
