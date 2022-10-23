#!/usr/bin/python3
"""
takes my Github credentials and uses the Github API to display my id
"""


if __name__ == '__main__':
    import requests
    from sys import argv

    try:
        r = requests.get("https://api.github.com/user",
                         auth=(LinusMatola, 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))
        file = r.json()
        print(file['id'])
    except:
        print('None')
