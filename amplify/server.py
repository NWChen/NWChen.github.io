from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import tweepy
import json

def get_tweets():
	consumer_key = "huIqkvuHqlsYwdPebLifIhyR9"
	consumer_secret = "tsb58Af5gpXQVWKMZlf3WjUvKHXeLLl7wP4kkck52syevv6ctA"
	access_token = "4085227876-2HfvmIw7peBn7X9oMAGRd4CyiivC8WidNRs0P1b"
	access_token_secret = "STheCqhqfUeZjv8mlHEf9I8XYfcCugSMCyUTDDIMKyI8G"
	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	auth.set_access_token(access_token, access_token_secret)
	api = tweepy.API(auth)
	query = "#trump"
	geoloc = "50,0,1000mi"
	public_tweets = api.search(q=query, geocode=geoloc)
	tweet_texts = []
	for tweet in public_tweets:
		tweet_texts.append(tweet.text);
		print tweet.text
	return json.dumps(tweet_texts)

class S(BaseHTTPRequestHandler):

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        self.wfile.write(get_tweets())

    def do_HEAD(self):
        self._set_headers()

	def set_data(self, tweets):
		data = tweets
        
def run(server_class=HTTPServer, handler_class=S, port=80):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print 'Starting httpd...'
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
