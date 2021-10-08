import http from '@/common/api/interface'

export default {
  r_example: () => {
    return http.request({
      url: '',
      method: 'POST',
      data_type: {
        "rc": {
          "type": "[object Number]"
        },
        "message": {
          "type": "[object String]"
        },
        "data": {
          "type": "[object Array]",
          "data": {
            "card_no": {
              "type": "[object Number]"
            },
            "message": {
              "type": "[object String]"
            }
          }
        },
        "obj": {
          "type": "[object Object]",
          "data": {
            "sub_card_no": {
              "type": "[object Number]"
            },
            "sub_message": {
              "type": "[object String]"
            },
            "data": {
              "type": "[object Array]",
              "data": {
                "card_no": {
                  "type": "[object Number]"
                },
                "message": {
                  "type": "[object String]"
                }
              }
            }
          }
        },
        "card_no": {
          "type": "[object Number]"
        }
      }
    })
  }
}
